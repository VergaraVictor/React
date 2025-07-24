// jest.config.js (ESM syntax, confirm this is your current content)
// export default {
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
//   },
//   moduleNameMapper: {
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
//   }
// };

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // transform: {
  //   '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
  // },
  // moduleNameMapper: {
  //   '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  //   '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  // },
  setupFiles: ['./jest.setup.js']
};