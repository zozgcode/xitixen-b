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
      balance_usd: 97212400.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '226829',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
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
      balance_usd: 2400000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '226829',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
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
        dateTime: 'November 10, 2024',
        description: 'Check deposit XXXXXX6257',
        status: 'Success',
        amount_usd: 15000.0
      },
      {
        dateTime: 'October 5, 2024',
        description: 'IMG model auto pay XXXXXX1104',
        status: 'Success',
        amount_usd: -1001.0
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
      }
    ]
  }
];
