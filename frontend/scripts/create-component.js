const fs = require('fs');
const path = require('path');

/*
 * Process arguments
 */
if (process.argv.length !== 3) {
  console.log('Incorrect number of arguments. Instead, try running `yarn create <ComponentName>`.');
  process.exit(1);
}

const arg = process.argv[2];
const component = arg.charAt(0).toUpperCase() + arg.slice(1);

/*
 * Create component directory
 */
const directory = `./src/components/${component}`;

if (fs.existsSync(directory)){
  console.log(`Didn't create ${component} component because the directory ${directory} already exists.`);
  process.exit(1);
}

fs.mkdirSync(directory);

/*
 * Create component file
 */
const componentFileName = path.join(directory, `${component}Component.tsx`);
const componentFileContents = `import React from 'react';

const ${component}: React.FC = () => {
  return <div>REPLACE ME</div>;
}

export default ${component};
`;

fs.writeFileSync(componentFileName, componentFileContents);

/*
 * Create index file
 */
const indexFileName = path.join(directory, 'index.tsx');
const indexFileContents = `import ${component} from './${component}';

export default ${component};
`;

fs.writeFileSync(indexFileName, indexFileContents);

/*
 * Create test file
 */
const testFileName = path.join(directory, `${component}Component.test.tsx`);
const testFileContents = `import React from 'react';
import { shallow } from 'enzyme';

import ${component} from '.';

describe('${component}Component', () => {
  test('renders without crashing', () => {
    shallow(<${component} />);
  });
});
`;

fs.writeFileSync(testFileName, testFileContents);

/*
 * Create stories file
 */
const storiesFileName = path.join(directory, `${component}Component.stories.tsx`);
const storiesFileContents = `import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../index.css';
import ${component} from '.';

storiesOf('${component}', module)
  .add('default', () => <${component} />);
`;

fs.writeFileSync(storiesFileName, storiesFileContents);

console.log(`Successfully created ${component} component in ${directory}`);
