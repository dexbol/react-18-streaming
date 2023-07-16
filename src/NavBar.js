/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {styled} from 'styled-components';

const StyledNav = styled.nav`
    a {
        color: red;
    }
`;

export default function NavBar() {
    return (
        <StyledNav>
            <a href="/">Home</a>
        </StyledNav>
    );
}
