/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IndentAction } from 'vs/editor/common/languages/languageConfiguration';

export const javascriptOnEnterRules = [
	{
		// e.g. /** | */
		beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
		afterText: /^\s*\*\/$/,
		action: { indentAction: IndentAction.IndentOutdent, appendText: ' * ' }
	}, {
		// e.g. /** ...|
		beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
		action: { indentAction: IndentAction.None, appendText: ' * ' }
	}, {
		// e.g.  * ...|
		beforeText: /^(\t|[ ])*[ ]\*([ ]([^\*]|\*(?!\/))*)?$/,
		previousLineText: /(?=^(\s*(\/\*\*|\*)).*)(?=(?!(\s*\*\/)))/,
		action: { indentAction: IndentAction.None, appendText: '* ' }
	}, {
		// e.g.  */|
		beforeText: /^(\t|[ ])*[ ]\*\/\s*$/,
		action: { indentAction: IndentAction.None, removeText: 1 }
	},
	{
		// e.g.  *-----*/|
		beforeText: /^(\t|[ ])*[ ]\*[^/]*\*\/\s*$/,
		action: { indentAction: IndentAction.None, removeText: 1 }
	}
];
