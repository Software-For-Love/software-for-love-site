/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// gatsby-node.js
// exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
//     if (page.path.match(/^\/style-guide/)) {
//       deletePage(page)
//     }
// }
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `src/pages/style-guide`,
    toPath: `src/pages/404`,
  });
}