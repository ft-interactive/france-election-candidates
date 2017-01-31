export default () => ({ // eslint-disable-line

  // link file UUID
  id: '736f9c20-dd68-11e6-9d7c-be108f1c1dce',

  // canonical URL of the published page
  // https://ig.ft.com/trump-cabinet/ get filled in by the ./configure script
  url: 'https://ig.ft.com/france-election/candidates/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-01-12T17:55:22Z'),

  headline: 'Runners and riders in race for French presidency',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The FT guide to the 2017 French election candidates',

  topic: {
    name: 'France presidential election',
    url: 'https://www.ft.com/topics/themes/France_presidential_election',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Hannah Murphy', url: 'https://www.ft.com/stream/authorsId/ZTEzYjIzOTktNTIzMi00OWEyLThjY2YtMjk2YzAyNDVjMDcz-QXV0aG9ycw==' },
    { name: 'Aleksandra Wisniewska', url: 'https://www.ft.com/aleksandra-wisniewska' },
  ],

  // Appears in the HTML <title>
  title: 'France presidential election candidates',

  // meta data
  description: 'The FT guide to the 2017 French election candidates: Fillon, Le Pen, Valls, Macron, Hamon, Bayrou, Melenchon.',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F867b4c1e-b627-11e6-961e-a1acd97f622d?source=ig&fit=scale-down&width=1200',
  // socialHeadline: '',
 // socialSummary:  'A guide to Donald Trump’s cabinet picks',

  // TWITTER
  // twitterImage: '',
  //twitterCreator: '@ft',
  tweetText: 'The @FT guide to the 2017 French election candidates',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
