/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

function clickHandler(event) {
  alert(event.target.textContent);
}

export default function Sidebar() {
  return (
    <>
      <h1>Archive</h1>
      <ul onClick={clickHandler}>
        <li>May 2021</li>
        <li>April 2021</li>
        <li>March 2021</li>
        <li>February 2021</li>
        <li>January 2021</li>
        <li>December 2020</li>
        <li>November 2020</li>
        <li>October 2020</li>
        <li>September 2020</li>
      </ul>
    </>
  );
}
