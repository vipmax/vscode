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

/**
 * PROTOTYPE: extra pixels rendered above and below the visible area when `NATIVE_SCROLL` is on.
 * The browser can scroll a frame before Monaco re-renders the lines; without this margin the
 * newly exposed rows are blank for that frame. 450px is 25 rows at 18px, like anycode's `buffer`.
 */
export const NATIVE_SCROLL_OVERSCAN_PX = 450;
