/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// const babelPolyfill = require('babel-polyfill');
import babelPolyfill from 'babel-polyfill';

configure({ adapter: new Adapter() });
