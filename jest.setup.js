/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({ adapter: new Adapter() })
