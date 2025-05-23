import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Timothy Bernando',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'timbernando38@gmail.com',
      createdOn: '2/5/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: false,
      balance_usd: 75225120.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2025',
        description: 'AirBnB Hawaii debit',
        status: 'Success',
        amount_usd: -4850.0
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Withdrawal from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'January 26, 2025',
        description: 'Withdrawal chk#229152',
        status: 'Success',
        amount_usd: -250120.0
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Teller Withdrawal',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Ballesteros B Kayla',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'b*@gmail.com',
      createdOn: '2/23/2025', // m/d/y
      username: 'Ballesteros59',
      password: 'KaylaBally59'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: true,
      account_number: true,
      balance_usd: 177164400.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '226829',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'April 28, 2025',
        description: 'Wire Transfer from DEA Deutsche Erdoel AG - XXXXXX3287',
        status: 'Pending',
        amount_usd: 80000000.0
      },
      {
        dateTime: 'March 20, 2025',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'March 20, 2025',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'January 31, 2025',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'January 30, 2025',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'January 27, 2025',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0
      },
      {
        dateTime: 'January 22, 2025',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'December 25, 2024',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'December 11, 2024',
        description: 'Credit from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'December 5, 2024',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0
      },
      {
        dateTime: 'December 1, 2024',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 800000.0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      firstName: 'Katie Steiner',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'k*@gmail.com',
      createdOn: '3/4/2025', // m/d/y
      username: 'eitak',
      password: '5104147288Ad$$'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: true,
      account_number: true,
      account_number_text: '',
      balance_usd: 2384090.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '226829',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 2, 2025',
        description: 'Bank Charges XXXXXX8723',
        status: 'Success',
        amount_usd: -205.0
      },
      {
        dateTime: 'March 2, 2025',
        description: 'Maintenance',
        status: 'Success',
        amount_usd: -99.0
      },
      {
        dateTime: 'March 1, 2025',
        description: 'Payment from Hollywood XXXXXX1552',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Fashion district XXXXXX8491',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'February 5, 2025',
        description: 'TV show no1 XXXXXX2637',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'February 4, 2025',
        description: 'Bank Charges XXXXXX0976',
        status: 'Success',
        amount_usd: -205.0
      },
      {
        dateTime: 'February 4, 2025',
        description: 'Maintenance',
        status: 'Success',
        amount_usd: -99.0
      },
      {
        dateTime: 'January 30, 2025',
        description: 'Check deposit XXXXXX4372',
        status: 'Success',
        amount_usd: 10000.0
      },
      {
        dateTime: 'January 15, 2025',
        description: 'IMG model auto pay XXXXXX1923',
        status: 'Success',
        amount_usd: -1001.0
      },
      {
        dateTime: 'January 4, 2025',
        description: 'Bank Charges XXXXXX8364',
        status: 'Success',
        amount_usd: -205.0
      },
      {
        dateTime: 'January 4, 2025',
        description: 'Maintenance',
        status: 'Success',
        amount_usd: -99.0
      },
      {
        dateTime: 'January 3, 2025',
        description: 'income Tax XXXXXX1369',
        status: 'Success',
        amount_usd: 1250.0
      },
      {
        dateTime: 'January 1, 2025',
        description: 'b/f XXXXXX0464',
        status: 'Success',
        amount_usd: 2385090.0
      },
      {
        dateTime: 'December 31, 2024',
        description: 'Annual Yearly Tax XXXXXX4456',
        status: 'Success',
        amount_usd: 13195.0
      },
      {
        dateTime: 'December 28, 2024',
        description: 'Payment from Hollywood XXXXXX5246',
        status: 'Success',
        amount_usd: 30000.0
      },
      {
        dateTime: 'December 12, 2024',
        description: 'Fashion district XXXXXX3718',
        status: 'Success',
        amount_usd: -2000.0
      },
      {
        dateTime: 'November 25, 2024',
        description: 'TV show no1 XXXXXX9821',
        status: 'Success',
        amount_usd: 60000.0
      },
      {
        dateTime: 'November 22, 2024',
        description: 'Wage Tax Income XXXXXX3451',
        status: 'Success',
        amount_usd: 16000.0
      },
      {
        dateTime: 'November 10, 2024',
        description: 'Check deposit XXXXXX6257',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'October 8, 2024',
        description: 'Maintenance',
        status: 'Success',
        amount_usd: -99.0
      },
      {
        dateTime: 'October 5, 2024',
        description: 'IMG model auto pay XXXXXX1104',
        status: 'Success',
        amount_usd: -1001.0
      },
      {
        dateTime: 'October 2, 2024',
        description: 'Bank Charges XXXXXX8723',
        status: 'Success',
        amount_usd: -205.0
      },
      {
        dateTime: 'September 18, 2024',
        description: 'Payment from Hollywood XXXXXX3098',
        status: 'Success',
        amount_usd: 22000.0
      },
      {
        dateTime: 'August 22, 2024',
        description: 'Fashion district XXXXXX4720',
        status: 'Success',
        amount_usd: -1700.0
      },
      {
        dateTime: 'July 30, 2024',
        description: 'TV show no1 XXXXXX8415',
        status: 'Success',
        amount_usd: 55000.0
      },
      {
        dateTime: 'June 14, 2024',
        description: 'Check deposit XXXXXX1927',
        status: 'Success',
        amount_usd: 12000.0
      },
      {
        dateTime: 'January 5, 2024',
        description: 'IMG model auto pay XXXXXX5216',
        status: 'Success',
        amount_usd: -1001.0
      },
      {
        dateTime: 'January 4, 2024',
        description: 'Income Tax XXXXXX1369',
        status: 'Success',
        amount_usd: 1250.0
      },
      {
        dateTime: 'December 20, 2023',
        description: 'Payment from Hollywood XXXXXX8453',
        status: 'Success',
        amount_usd: 27000.0
      },
      {
        dateTime: 'November 18, 2023',
        description: 'Fashion district XXXXXX3927',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'October 10, 2023',
        description: 'TV show no1 XXXXXX7561',
        status: 'Success',
        amount_usd: 48000.0
      },
      {
        dateTime: 'September 5, 2023',
        description: 'Check deposit XXXXXX2148',
        status: 'Success',
        amount_usd: 13000.0
      },
      {
        dateTime: 'August 15, 2023',
        description: 'IMG model auto pay $1001 XXXXXX6094',
        status: 'Success',
        amount_usd: -1001.0
      },
      {
        dateTime: 'July 25, 2023',
        description: 'Payment from Hollywood XXXXXX4781',
        status: 'Success',
        amount_usd: 26000.0
      },
      {
        dateTime: 'June 12, 2023',
        description: 'Fashion district XXXXXX1395',
        status: 'Success',
        amount_usd: -1600.0
      },
      {
        dateTime: 'May 29, 2023',
        description: 'TV show no1 XXXXXX2956',
        status: 'Success',
        amount_usd: 53000.0
      },
      {
        dateTime: 'April 17, 2023',
        description: 'Check deposit XXXXXX9182',
        status: 'Success',
        amount_usd: 11000.0
      },
      {
        dateTime: 'March 8, 2023',
        description: 'IMG model auto pay $1001 XXXXXX8452',
        status: 'Success',
        amount_usd: -1001.0
      },
      {
        dateTime: 'March 2, 2023',
        description: 'Bank Charges XXXXXX8723',
        status: 'Success',
        amount_usd: -205.0
      },
      {
        dateTime: 'February 22, 2023',
        description: 'Payment from Hollywood XXXXXX6723',
        status: 'Success',
        amount_usd: 24000.0
      },
      {
        dateTime: 'January 10, 2023',
        description: 'Fashion district XXXXXX5328',
        status: 'Success',
        amount_usd: -1750.0
      },
      {
        dateTime: 'January 4, 2023',
        description: 'Income Tax XXXXXX1369',
        status: 'Success',
        amount_usd: 1250.0
      },
      {
        dateTime: 'December 5, 2022',
        description: 'TV show no1 XXXXXX2861',
        status: 'Success',
        amount_usd: 51000.0
      },
      {
        dateTime: 'November 15, 2022',
        description: 'Check deposit XXXXXX4723',
        status: 'Success',
        amount_usd: 14000.0
      },
      {
        dateTime: 'October 10, 2022',
        description: 'Bank Charges XXXXXX8723',
        status: 'Success',
        amount_usd: -205.0
      },
      {
        dateTime: 'October 7, 2022',
        description: 'IMG model auto pay $1001 XXXXXX1384',
        status: 'Success',
        amount_usd: -1001.0
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      firstName: 'Bernadette Sullivan',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'B.Sullivan@gmail.com',
      createdOn: '3/13/2025', // m/d/y
      username: 'Bernadette1304',
      password: 'saythetruth220'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: true,
      account_number: true,
      account_number_text: '',
      balance_usd: 2000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '226829',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 13, 2025',
        description: 'Credit from D&D Building XXXXXX8723',
        status: 'Pending',
        amount_usd: 400000.0
      },
      {
        dateTime: 'March 12, 2025',
        description: 'Withdrawal XXXXXX2324',
        status: 'Success',
        amount_usd: -2000.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Debit from United airlines XXXXXX1367',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Purchase at Walmart XXXXXX3278',
        status: 'Success',
        amount_usd: -320.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Purchase at  Queens Bee boutiques XXXXXX1038',
        status: 'Success',
        amount_usd: -400.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Debit Tax office XXXXXX3689',
        status: 'Success',
        amount_usd: -600.0
      },
      {
        dateTime: 'March 11, 2025',
        description: 'Credit released from deposit XXXXXX8636',
        status: 'Success',
        amount_usd: 7000.0
      },
      {
        dateTime: 'March 3, 2025',
        description: 'Check Deposit XXXXXX3679',
        status: 'Pending',
        amount_usd: 15000.0
      },
      {
        dateTime: 'February 25, 2025',
        description: 'Account Open Fee XXXXXX8739',
        status: 'Success',
        amount_usd: 200.0
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      firstName: 'Louis Broussard',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'l*@gmail.com',
      createdOn: '5/16/2025', // m/d/y
      username: 'BroussardLee',
      password: 'Hopenotlost212'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: true,
      account_number_text: '',
      balance_usd: 987450.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '226829',
      headerText: "Dear Valued Customer,",
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 15, 2025',
        description: 'Transfer from Chase Bank - XXXXXX5378',
        status: 'Success',
        amount_usd: 75000
      },
      {
        dateTime: 'May 14, 2025',
        description: 'Transfer to Heritage Bank - XXXXXX3478',
        status: 'Success',
        amount_usd: -62000
      },
      {
        dateTime: 'May 13, 2025',
        description: 'Transfer from Jack Whitman - XXXXXX8145',
        status: 'Success',
        amount_usd: 62000
      },
      {
        dateTime: 'April 10, 2025',
        description: 'Transfer to Emily Carter - XXXXXX2371',
        status: 'Success',
        amount_usd: -28000
      },
      {
        dateTime: 'March 2, 2025',
        description: 'Transfer from Albion Freight Ltd. - XXXXXX9912',
        status: 'Success',
        amount_usd: 100000
      },
      {
        dateTime: 'February 14, 2025',
        description: 'VAT Fee - XXXXXX3379',
        status: 'Success',
        amount_usd: -35
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Transfer to Marcus Bennett - XXXXXX6014',
        status: 'Success',
        amount_usd: -58000
      },
      {
        dateTime: 'December 18, 2024',
        description: 'Transfer from Nora Smith - XXXXXX7598',
        status: 'Success',
        amount_usd: 52000
      },
      {
        dateTime: 'November 1, 2024',
        description: 'Transfer from Beacon & Rowe Ltd. - XXXXXX6235',
        status: 'Success',
        amount_usd: 67000
      },
      {
        dateTime: 'September 20, 2024',
        description: "Transfer to Michael O'Connor - XXXXXX8942",
        status: 'Success',
        amount_usd: -34000
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Transfer from Owen Miller - XXXXXX4783',
        status: 'Success',
        amount_usd: 150000
      },
      {
        dateTime: 'June 23, 2024',
        description: 'Transfer to Sophie Davies - XXXXXX7265',
        status: 'Success',
        amount_usd: -69000
      },
      {
        dateTime: 'May 1, 2024',
        description: 'Transfer from Capshore Solutions - XXXXXX1570',
        status: 'Success',
        amount_usd: 59000
      },
      {
        dateTime: 'February 25, 2024',
        description: 'VAT Fee - XXXXXX6407',
        status: 'Success',
        amount_usd: -55
      },
      {
        dateTime: 'December 10, 2023',
        description: 'Transfer from Benjamin Hill - XXXXXX3904',
        status: 'Success',
        amount_usd: 200000
      },
      {
        dateTime: 'October 17, 2023',
        description: 'Transfer to Lily Turner - XXXXXX2796',
        status: 'Success',
        amount_usd: -47000
      },
      {
        dateTime: 'August 8, 2023',
        description: 'Transfer from Alderstone Corp. - XXXXXX8259',
        status: 'Success',
        amount_usd: 52000
      },
      {
        dateTime: 'June 15, 2023',
        description: 'Transfer from Daniel Walker - XXXXXX0621',
        status: 'Success',
        amount_usd: 88000
      },
      {
        dateTime: 'April 4, 2023',
        description: 'Transfer to Charlotte Morgan - XXXXXX5093',
        status: 'Success',
        amount_usd: -76000
      },
      {
        dateTime: 'January 11, 2023',
        description: 'Transfer from Lanchester Group - XXXXXX1940',
        status: 'Success',
        amount_usd: 64000
      },
      {
        dateTime: 'October 30, 2022',
        description: 'Transfer to Henry Clark - XXXXXX7228',
        status: 'Success',
        amount_usd: -53000
      },
      {
        dateTime: 'September 1, 2022',
        description: 'Transfer from Chloe Baker - XXXXXX8741',
        status: 'Success',
        amount_usd: 100000
      },
      {
        dateTime: 'July 20, 2022',
        description: 'Transfer from Halford Utilities - XXXXXX3156',
        status: 'Success',
        amount_usd: 76000
      },
      {
        dateTime: 'May 12, 2022',
        description: 'Transfer to Lewis Wood - XXXXXX1863',
        status: 'Success',
        amount_usd: -65000
      },
      {
        dateTime: 'February 18, 2022',
        description: 'Transfer from Ava Foster - XXXXXX9478',
        status: 'Success',
        amount_usd: 63000
      },
      {
        dateTime: 'December 2, 2021',
        description: 'Transfer from Norwick Systems - XXXXXX0537',
        status: 'Success',
        amount_usd: 58000
      },
      {
        dateTime: 'September 3, 2021',
        description: 'Transfer to Harry James - XXXXXX8640',
        status: 'Success',
        amount_usd: -75000
      },
      {
        dateTime: 'June 15, 2021',
        description: 'Transfer from Ellie Brooks - XXXXXX7905',
        status: 'Success',
        amount_usd: 54000
      },
      {
        dateTime: 'March 27, 2021',
        description: 'Transfer to Victoria Lane - XXXXXX6217',
        status: 'Success',
        amount_usd: -67000
      },
      {
        dateTime: 'November 9, 2020',
        description: 'Transfer from Linthorpe Supplies Ltd. - XXXXXX2636',
        status: 'Success',
        amount_usd: 49000
      },
      {
        dateTime: 'July 15, 2019',
        description: 'VAT Fee - XXXXXX3012',
        status: 'Success',
        amount_usd: -40
      },
      {
        dateTime: 'January 2, 2018',
        description: 'Transfer from Linthorpe Supplies Ltd. - XXXXXX1058',
        status: 'Success',
        amount_usd: 49000
      }
    ]
  }
];
