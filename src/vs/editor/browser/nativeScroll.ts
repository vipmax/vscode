/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * PROTOTYPE: extra pixels rendered above and below the visible area when native scroll is on.
 * The browser can scroll a frame before Monaco re-renders the lines; without this margin the
 * newly exposed rows are blank for that frame. 450px is 25 rows at 18px, like anycode's `buffer`.
 */
export const NATIVE_SCROLL_OVERSCAN_PX = 450;
