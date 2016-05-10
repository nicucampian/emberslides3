import Ember from 'ember';

// bringLayouts will be deleted when model layouts will be received from router
const bringLayouts = [
  {
    shapes: [],
    url: 'assets/layouts/blank.png',
  },
  {
    shapes: [
        { type: 'text',
          content: 'Click to add Title',
          x: '30%',
          y: '50%',
          w: '200px',
          h: '50px',
        },
    ],
    url: 'assets/layouts/title.png',
  },
  {
    shapes: [
        { type: 'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type: 'text',
          content: 'Click to add Text',
          x: '20%',
          y: '43%',
          w: '100px',
          h: '80px',
        },
        { type: 'text',
          content: 'Click to add Text',
          x: '20%',
          y: '76%',
          w: '100px',
          h: '80px',
        },
        { type: 'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '66%',
          y: '66%',
          w: '200px',
          h: '200px',
        },
    ],
    url: 'assets/layouts/title-2content-image.png',
  },
  {
    shapes:[
        { type:'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '20%',
          y: '66%',
          w: '200px',
          h: '200px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '60%',
          y: '66%',
          w: '200px',
          h: '200px',
        },
      ],
      url:'assets/layouts/title-2image.png',
  },
  {
    shapes:[
        { type: 'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type: 'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '20%',
          y: '43%',
          w: '200px',
          h: '200px',
        },
        { type: 'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '40%',
          y: '43%',
          w: '200px',
          h: '200px',
        },
        { type: 'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '20%',
          y: '76%',
          w: '300px',
          h: '200px',
        },
    ],
    url: 'assets/layouts/title-3image.png',
  },
  {
    shapes:[
        { type:'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '20%',
          y: '43%',
          w: '150px',
          h: '150px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '60%',
          y: '76%',
          w: '150px',
          h: '150px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '20%',
          y: '76%',
          w: '150px',
          h: '150px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '60%',
          y: '76%',
          w: '150px',
          h: '150px',
        },
      ],
      url: 'assets/layouts/title-4image.png',
  },
  {
    shapes: [
        { type:'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '15%',
          y: '43%',
          w: '100px',
          h: '100px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '45%',
          y: '43%',
          w: '100px',
          h: '100px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '15%',
          y: '43%',
          w: '100px',
          h: '100px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '15%',
          y: '76%',
          w: '100px',
          h: '100px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '45%',
          y: '76%',
          w: '100px',
          h: '100px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '75%',
          y: '76%',
          w: '100px',
          h: '100px',
        },
      ],
      url: 'assets/layouts/title-6image.png',
  },
  {
    shapes: [
        { type:'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '35%',
          y: '43%',
          w: '250px',
          h: '250px',
        },
      ],
      url: 'assets/layouts/title-image.png',
  },
  {
    shapes: [
        { type:'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type:'text',
          content: 'Click to add Text',
          x: '50%',
          y: '43%',
          w: '200px',
          h: '100px',
        },
        { type:'picture',
          content: 'https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png',
          x: '15%',
          y: '73%',
          w: '200px',
          h: '200px',
        },
      ],
      url: 'assets/layouts/title-content-image.png',
  },
  {
    shapes: [
        { type:'text',
          content: 'Click to add Title',
          x: '30%',
          y: '10%',
          w: '100px',
          h: '30px',
        },
        { type:'text',
          content: 'Click to add Text',
          x: '20%',
          y: '43%',
          w: '500px',
          h: '400px',
        },
      ],
      url: 'assets/layouts/title-content.png',
  }
];


export default Ember.Component.extend({
  tagName: 'layouts-panel',
  classNames: ['layouts-panel'],
  layouts: [],
  init() {
    this._super(...arguments);
    this.layouts = bringLayouts;
  },
});
