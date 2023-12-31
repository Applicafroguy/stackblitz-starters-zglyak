// playground requires you to assign document definition to a variable called dd

var dd = {
  pageMargins: [40, 135, 40, 60],
  //watermark: { text: 'Silusapho', angle: 45 ,color: 'blue', opacity: 0.06, fontSize: 100, bold: false, italics: true},

  header: {
    image:
    'data:image/png;base64,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'
  },

  content: [
    { text: 'Personal Details', style: 'header' },
        {
      style: 'tableExample',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [
            { text: 'Name', style: 'tableHeader' },
            { text: 'Sivuyile Magutywa', colSpan: 3 },'', ''
          ],
          [
            { text: 'D.O.B', style: 'tableHeader' },
            { text: '20 June 1990' },
             { text: 'ID Number', style: 'tableHeader' },
            { text: '902128827731' },
          ],
          [
            { text: 'Gender', style: 'tableHeader' },
            { text: 'Male' },
             { text: 'Race', style: 'tableHeader' },
            { text: 'African' },
          ],
          [
            { text: 'Marital Status', style: 'tableHeader' },
            { text: 'Single' },
             { text: 'Title', style: 'tableHeader' },
            { text: 'Mr' },
          ],
            [
            { text: 'Language', style: 'tableHeader' },
            { text: 'IsiXhosa', colSpan: 3 },'', ''
          ],
        ],
      },
    },
    { text: 'Policy Details', style: 'subheader' },
    {
      style: 'tableExample',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [
            { text: 'Name', style: 'tableHeader' },
            { text: 'Family Plan', colSpan: 3 },'', ''
          ],
          [
            { text: 'Coverage', style: 'tableHeader' },
            { text: 'R 20 000.00' },
             { text: 'Premium', style: 'tableHeader' },
            { text: 'R 230.00' },
          ],
           [
            { text: 'Description', style: 'tableHeader', colSpan:4 },
            {},{},{}
           ],
           [
           { text: 'G.S. (Under 65 Main Member + Family) @ 20K',  colSpan:4 },

           ]
        ],
      },
    },
    { text: 'Contact Details', style: 'subheader' },
    {
      style: 'tableExample',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [
            { text: 'Cell Number', style: 'tableHeader' },
            { text: '089 2321 123' },
             { text: 'Alternative Number', style: 'tableHeader' },
            { text: '087 3212 332' },
          ],
            [
            { text: 'Email', style: 'tableHeader' },
            { text: 's.magutywa@kernet.co.za', colSpan: 3 },'', ''
          ],
        ],
      },
      
    },
     { text: 'Address', style: 'subheader' },
    {
      style: 'tableExample',
      table: {
        widths: ['*',  '*'],
        headerRows: 3,
        body: [
          [
            { text: 'Residential', style: 'tableHeader' },
            { text: 'Postal', style: 'tableHeader' },
          ],
            [
            { text: ['31166 Hela Street\n', 'Cape Town\n','Strand\n', '7140'], rowSpan: 2},
            { text: ['31166 Hela Street\n', 'Cape Town\n','Strand\n', '7140'], rowSpan: 2},
          ],
           [
            {},
            {},
          ],
        ],
      },
      
    },
        { text: 'Benefitiary', style: 'subheader',pageBreak: 'before' },
        {
      style: 'tableExample',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [
            { text: 'Name', style: 'tableHeader' },
            { text: 'Amanda Magutywa', colSpan: 3 },'', ''
          ],
          [
            { text: 'D.O.B', style: 'tableHeader' },
            { text: '20 June 1993' },
             { text: 'ID Number', style: 'tableHeader' },
            { text: '932128827731' },
          ],
          [
            { text: 'Gender', style: 'tableHeader' },
            { text: 'Female' },
             { text: 'Race', style: 'tableHeader' },
            { text: 'African' },
          ],
          [
            { text: 'Language', style: 'tableHeader' },
            { text: 'IsiXhosa' },
             { text: 'Title', style: 'tableHeader' },
            { text: 'Mrs' },
          ],
            [
            { text: 'Relationship', style: 'tableHeader' },
            { text: 'Spouse', colSpan: 3 },'', ''
          ],
        ],
      },
    },
     { text: 'Members', style: 'subheader', },
     { text: 'Children (Age: 0 – 21 years)', style: 'smallheader', },
     {
      style: 'tableExample',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [
            { text: 'Name', style: 'tableHeader' },
            { text: 'Zimasa Magutywa', colSpan: 3 },'', ''
          ],
          [
            { text: 'D.O.B', style: 'tableHeader' },
            { text: '20 June 2010' },
             { text: 'ID Number', style: 'tableHeader' },
            { text: '201028827731' },
          ],
          [
            { text: 'Gender', style: 'tableHeader' },
            { text: 'Female' },
             { text: 'Language', style: 'tableHeader' },
            { text: 'IsiXhosa' },
          ],
          [
         
             { text: 'Relationship', style: 'tableHeader' },
            { text: 'Father', colSpan: 3 },
            {},{}
          ]
        ],
      },
     },
     {
      style: 'tableExample',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [
            { text: 'Name', style: 'tableHeader' },
            { text: 'David Magutywa', colSpan: 3 },'', ''
          ],
          [
            { text: 'D.O.B', style: 'tableHeader' },
            { text: '13 March 2012' },
             { text: 'ID Number', style: 'tableHeader' },
            { text: '201228827731' },
          ],
          [
            { text: 'Gender', style: 'tableHeader' },
            { text: 'Male' },
             { text: 'Language', style: 'tableHeader' },
            { text: 'IsiXhosa' },
          ],
          [
         
             { text: 'Relationship', style: 'tableHeader' },
            { text: 'Father', colSpan: 3 },
            {},{}
          ]
        ],
      },
     },
       { text: 'Senior Family Members (Age: 65 – 84 years)', style: 'smallheader2', },
     {
      style: 'tableExample',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [
            { text: 'Name', style: 'tableHeader' },
            { text: 'Lungelo Magutywa', colSpan: 3 },'', ''
          ],
          [
            { text: 'D.O.B', style: 'tableHeader' },
            { text: '20 May 1967' },
             { text: 'ID Number', style: 'tableHeader' },
            { text: '671028827731' },
          ],
          [
            { text: 'Gender', style: 'tableHeader' },
            { text: 'Female' },
             { text: 'Language', style: 'tableHeader' },
            { text: 'IsiXhosa' },
          ],
          [
         
             { text: 'Relationship', style: 'tableHeader' },
            { text: 'Father', colSpan: 3 },
            {},{}
          ]
        ],
      },
     },
     {
      style: 'tableExample',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [
            { text: 'Name', style: 'tableHeader' },
            { text: 'Marry Magutywa', colSpan: 3 },'', ''
          ],
          [
            { text: 'D.O.B', style: 'tableHeader' },
            { text: '13 July 1971' },
             { text: 'ID Number', style: 'tableHeader' },
            { text: '711228827731' },
          ],
          [
            { text: 'Gender', style: 'tableHeader' },
            { text: 'Male' },
             { text: 'Language', style: 'tableHeader' },
            { text: 'IsiXhosa' },
          ],
          [
             { text: 'Relationship', style: 'tableHeader' },
            { text: 'Mother', colSpan: 3 },
            {},{}
          ]
        ],
      },
     },
  ],
  styles: {
    header: {
      fontSize: 16,
      bold: true,
      margin: [0, 0, 0, 10],
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 10],
    },
     smallheader: {
      fontSize: 13,
      bold: false,
      margin: [0, 0, 0, 5],
    },
    smallheader2: {
      fontSize: 13,
      bold: false,
      margin: [0, 5, 0, 5],
    },
    tableExample: {
      margin: [0, 5, 0, 15],
    },
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: 'black',
      fillColor: '#eeeeee',
    },
  },
  defaultStyle: {
    // alignment: 'justify'
  },
};
