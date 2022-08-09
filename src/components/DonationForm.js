import { message } from 'antd';
import React from 'react';
import { Action } from './index';
import "../sass/components/_donation-form.scss";

export default class DonationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
  }

  // Use this method to get query params and display appropriate message
  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('id')) {
      const fetch_url = '/.netlify/functions/checkout/' + params.get('id')

      fetch(fetch_url, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(({ data }) => {
          const amount_dollars = data.session.amount_total / 100;

          message.success(`Thank you for donating ${amount_dollars}$!`, 5);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else if (params.has('error')) {
      message.error('Something went wrong while donating.', 5);
    }
  }

  handleSetAmount(amount) {
    return () => {
      this.setState({ ...this.state, amount })
    }
  }

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    const parsedAmount = parseFloat(this.state.amount);

    if (!Number.isNaN(parsedAmount) && parsedAmount > 0) {
      fetch('/.netlify/functions/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parsedAmount
        }),
      })
        .then(response => response.json())
        .then(({ data }) => {
          window.location.replace(data.url);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      message.error('Invalid donation amount');
    }
  }

  render() {
    return (
      <section className="section bg-gray" style={{ paddingTop: '100px' }}>
        <div className="donation-form-container container container--lg" style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flex: '1' }}>
            <div style={{ maxWidth: '360px' }}>
              <h3 className="section__title" style={{ paddingBottom: '20px' }}>
                Help us continue our work by donating to us.
              </h3>
              <div>
                All donations will go towards any expenses related to maintaining our organization. Any surplus will be donated to charities.
              </div>
            </div>
          </div>

          <div className="donation-form-form flex--center" style={{ display: 'flex', flex: '1' }}>
            <div style={{ backgroundColor: 'white', width: '500px', borderRadius: '5px', padding: '50px', display: 'flex', flexDirection: 'column' }}>
              <h3 className="section__title" style={{ paddingBottom: '20px' }}>
                Support Us!
              </h3>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span onClick={this.handleSetAmount(1)}>
                    <Action action={{ label: '$1', style: 'secondary' }} />
                  </span>
                  <span onClick={this.handleSetAmount(5)}>
                    <Action action={{ label: '$5', style: 'secondary' }} />
                  </span>
                  <span onClick={this.handleSetAmount(10)}>
                    <Action action={{ label: '$10', style: 'secondary' }} />
                  </span>
                  <span onClick={this.handleSetAmount(20)}>
                    <Action action={{ label: '$20', style: 'secondary' }} />
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Enter Amount</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', fontSize: '16px', top: '50%', transform: 'translateY(-50%)', left: '8px' }}>
                      $
                    </span>
                    <input type="number" name="amount" id="amount" placeholder="Amount" value={this.state.amount} onChange={(event) => this.setState({ amount: event.target.value })} style={{ width: '50%', paddingLeft: '20px  ' }} required />
                  </div>
                </div>
                <div className="form-submit">
                  <button type="submit" className="button" id="submit">Donate</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}