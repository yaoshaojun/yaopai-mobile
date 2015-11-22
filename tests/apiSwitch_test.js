import {
  expect
}
from 'chai';
import {
  USER, FILE
}
from '../app/api';
import _ from 'underscore';

describe('API switch', () => {
  const devHosts = [
    'dev.m.aiyaopai.com/',
    'dev.manage.aiyaopai.com',
    'localhost:8080',
    '192.168.3.2:5000/#/login_page',
    'http://yaopai-mobile-dev.herokuapp.com/'
  ];

  const prodHosts = [
    'm.aiyaopai.com/',
    'manage.aiyaopai.com',
    'http://yaopai-mobile.herokuapp.com/'
  ];

  it('will get right local host', () => {
    const dev_host = 'http://yaopai-mobile-dev.heroku.com/#/work?_k=gn36vo';
    const pro_host = 'http://yaopai-mobile.heroku.com/#/work?_k=gn36vo';

    const re = /dev\.|192\.|localhost/i;
    expect(dev_host).to.match(re);
    expect(pro_host).to.not.match(re);
    expect('m.aiyaopai.com/').to.not.match(re);
    expect('dev.m.aiyaopai.com/').to.match(re);
    expect('dev.manage.aiyaopai.com').to.match(re);
    expect('manage.aiyaopai.com').to.not.match(re);
    expect('localhost:8080').to.match(re);
    expect('192.168.3.2:5000/#/login_page').to.match(re);
  });

  it('has hosts', () => {
    devHosts.forEach((host, i) => {
      expect(hasHost(host)).to.equal(true);
    });
  });

  it('is dev host', () => {
    devHosts.forEach((host) => {
      expect(isDevHost(host)).to.equal(true);
    });
  });

  it('had hosts and is dev host', () => {
    devHosts.forEach((host) => {
      expect(hasHost(host) && isDevHost(host)).to.equal(true);
    });
  });

  it('is production host, but not dev host', () => {
    devHosts.forEach((host) => {
      expect(isProdHost(host)).to.equal(false);
    });

    prodHosts.forEach((host) => {
      expect(isProdHost(host)).to.equal(true);
    });
  });

  it('has host and is production host', () => {
    devHosts.forEach((host) => {
      expect(hasHost(host) && isProdHost(host)).to.equal(false);
    });

    prodHosts.forEach((host) => {
      expect(hasHost(host) && isProdHost(host)).to.equal(true);
    });
  });
});

function isProdHost(host) {
  return !isDevHost(host);
}

function isDevHost(host) {
  const re = /dev\.|192\.|localhost/i;
  const founds = host.match(re);
  if (founds != null) {
    return true;
  } else {
    return false;
  }
}

function hasHost(host) {
  return host.length > 0;
}