module.exports = {
  name: 'l5',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/l5',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
