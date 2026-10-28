/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * PROTOTYPE (anycode-scroll): when `true`, vertical and horizontal scrolling is done by the
 * browser (`overflow: auto` on the scroll container, which holds `.lines-content`) instead of
 * Monaco's emulated scrollable that moves `.lines-content` with `top`/`left`.
 * `EditorScrollbar` and `ViewLines.renderText` both branch on this flag.
 */
export const NATIVE_SCROLL = true;
