import _ from "lodash";
import React from 'react';
import { InputNumber, Space } from 'antd';
import { Action } from './index';
import { withPrefix } from "../utils";

export default class DonationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
  }

  render () {
    return (
      <section className="section bg-gray" style={{ paddingTop: '100px' }}>
        <div className="container container--lg" style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flex: '1' }}>
            <div style={{ maxWidth: '360px' }}>
              <h3 className="section__title" style={{paddingBottom: '20px'}}>
                Help us continue our work by donating to us.
              </h3>
              <div>
               All donations will go towards any expenses related to maintaining our organization. Any surplus will be donated to charities.
              </div>
            </div>
          </div>

          <div className="flex--center" style={{ display: 'flex', flex: '1' }}>
            <div style={{ backgroundColor: 'white', width: '500px', borderRadius: '5px', padding: '50px', display: 'flex', flexDirection: 'column'}}>
              <h3 className="section__title" style={{paddingBottom: '20px'}}>
                Support Us!
              </h3>
              <form>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span onClick={() => this.setState({ amount: 1 })}>
                    <Action action={{ label: '$1', style: 'secondary' }} />
                  </span>
                  <span onClick={() => this.setState({ amount: 5 })}>
                    <Action action={{ label: '$5', style: 'secondary' }} />
                  </span>
                  <span onClick={() => this.setState({ amount: 10 })}>
                    <Action action={{ label: '$10', style: 'secondary' }} />
                  </span>
                  <span onClick={() => this.setState({ amount: 20 })}>
                    <Action action={{ label: '$20', style: 'secondary' }} />
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Enter Amount</label>
                  <div style={{position: 'relative'}}>
                    <span style={{position: 'absolute', fontSize: '16px', top: '47.5%', transform: 'translateY(-50%)', left: '8px'}}>
                      $
                    </span>
                    <input type="number" name="amount" id="amount" placeholder="Amount" value={this.state.amount} onChange={(event) => this.setState({ amount: event.target.value })} style={{width: '50%', paddingLeft: '20px  '}} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="card-info">Card Info</label>
                  <div style={{display:'flex'}}>
                    <input type="text" placeholder="Card Number" style={{flex:'4'}} required />
                    <input type="text" placeholder="CVV" style={{flex:'1'}} required />
                    <input type="text" placeholder="Exp" style={{flex:'1'}} required />
                  </div>
                </div>
                <div className="form-submit">
                  <button type="submit" className="button" id="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}