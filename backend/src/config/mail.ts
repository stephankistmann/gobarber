interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    }
  }
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'stephanjacob@stephanjacob.online',
      name: 'Stephan Jacob'
    }
  }
} as IMailConfig;
