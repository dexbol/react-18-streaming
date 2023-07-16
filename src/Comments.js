/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {styled} from 'styled-components';
import {useData} from './data';

const StyledComment = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: pink;
`;

export default function Comments() {
    const comments = useData();
    return (
        <>
            {comments.map((comment, i) => (
                <StyledComment key={i}>{comment}</StyledComment>
            ))}
        </>
    );
}
