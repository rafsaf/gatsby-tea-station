# Gatsby Tea Station project

1. **One of the projects for the development of css & web dev & etc. skills. Currently deployed on netlify [gatsby-tea-station.netlify.app](https://gatsby-tea-station.netlify.app/)**

2. **Created using [Gatsby.js](www.gatsbyjs.com).**

3. **This project uses basic css with an emphasis on building responsive layouts with float:**

   ```css
   /* css */
   /* row (parent element) */
   .row::before,
   .row::after {
     content: "";
     clear: both;
     display: table;
   }
   /* item (child element) is inside a row */
   @media screen and (min-width: 576px) {
     .item {
       float: left;
       width: 50%;
     }
   }
   /* etc */
   ```

4. **CSS Modules**
5. **Link to HTML & CSS course [www.johnsmilga.com](https://www.johnsmilga.com/).**
