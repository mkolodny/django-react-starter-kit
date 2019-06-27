const fs = require('fs');
const path = require('path');

/*
 * Process arguments
 */
if (process.argv.length !== 3) {
  console.log('Incorrect number of arguments. Instead, run `yarn create-reducer <your-reducer-name>`.');
  process.exit(1);
}

const reducer = process.argv[2];

/*
 * Create reducer directory
 */
const directory = `./src/store/${reducer}`;

if (fs.existsSync(directory)){
  console.log(`Didn't create ${reducer} reducer because the directory ${directory} already exists.`);
  process.exit(1);
}

fs.mkdirSync(directory);

/*
 * Create reducer file
 */
const reducerFileName = path.join(directory, `${reducer}Reducer.ts`);
const reducerState = `${reducer.charAt(0).toUpperCase() + reducer.slice(1)}State`
const reducerFileContent = `import { createReducer } from 'redux-starter-kit';

export interface ${reducerState} {
}

export const initialState: ${reducerState} = {
};

export default createReducer(initialState, {
});
`;

fs.writeFileSync(reducerFileName, reducerFileContent);

/*
 * Create reducer test file
 */
const testFileName = path.join(directory, `${reducer}Reducer.test.ts`);
const testFileContent = `import reducer, { initialState } from './${reducer}Reducer';

describe('${reducer}Reducer', () => {
  test('initial state', () => {
    const action = {type: ''};

    expect(reducer(undefined, action)).toEqual(initialState);
  });
});
`;

fs.writeFileSync(testFileName, testFileContent);

/*
 * Create actions file
 */
const actionsFileName = path.join(directory, `${reducer}Actions.ts`);
const actionsFileContent = `import { createAction } from 'redux-starter-kit';

const namespace = '${reducer}/'

interface ReplaceMePayload {
}

export const replaceMe = createAction<ReplaceMePayload>(\`\${namespace}/replaceMe\`);
`;

fs.writeFileSync(actionsFileName, actionsFileContent);

console.log(`Successfully created ${reducer} reducer in ${directory}`);
