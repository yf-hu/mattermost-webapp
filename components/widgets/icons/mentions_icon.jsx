// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class MentionsIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.mention'
                    defaultMessage='Mention Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            width='12px'
                            height='12px'
                            viewBox='0 0 18 18'
                            version='1.1'
                            role='img'
                            aria-label={ariaLabel}
                            fill='#555555'
                        >
                            <path d='M9 11.7C9.72 11.7 10.35 11.43 10.89 10.89C11.43 10.35 11.7 9.71999 11.7 8.99999C11.7 8.27999 11.43 7.64999 10.89 7.10999C10.35 6.56999 9.72 6.29999 9 6.29999C8.28 6.29999 7.65 6.56999 7.11 7.10999C6.57 7.64999 6.3 8.27999 6.3 8.99999C6.3 9.71999 6.57 10.35 7.11 10.89C7.65 11.43 8.28 11.7 9 11.7ZM9 -1.26362e-05C11.46 -1.26362e-05 13.56 0.869987 15.3 2.60999C16.176 3.48599 16.842 4.45199 17.298 5.50799C17.766 6.59999 18 7.76399 18 8.99999V10.26C18 10.692 17.916 11.118 17.748 11.538C17.592 11.922 17.376 12.276 17.1 12.6C16.788 12.912 16.446 13.14 16.074 13.284C15.714 13.428 15.306 13.5 14.85 13.5C13.746 13.5 12.876 13.05 12.24 12.15C11.34 13.05 10.26 13.5 9 13.5C7.716 13.5 6.666 13.05 5.85 12.15C4.95 11.25 4.5 10.2 4.5 8.99999C4.5 7.70399 4.95 6.65399 5.85 5.84999C6.666 4.94999 7.716 4.49999 9 4.49999C10.296 4.49999 11.346 4.94999 12.15 5.84999C13.05 6.74999 13.5 7.79999 13.5 8.99999V10.26C13.5 10.44 13.536 10.614 13.608 10.782C13.692 10.95 13.8 11.106 13.932 11.25C14.076 11.382 14.232 11.49 14.4 11.574C14.568 11.658 14.718 11.7 14.85 11.7C15.03 11.7 15.204 11.664 15.372 11.592C15.54 11.508 15.696 11.394 15.84 11.25C16.08 11.01 16.2 10.68 16.2 10.26V8.99999C16.2 7.01999 15.48 5.30999 14.04 3.86999C13.332 3.16199 12.564 2.63999 11.736 2.30399C10.908 1.96799 9.996 1.79999 9 1.79999C7.056 1.79999 5.346 2.48999 3.87 3.86999C3.174 4.52999 2.652 5.30399 2.304 6.19199C1.968 7.04399 1.8 7.97999 1.8 8.99999C1.8 9.98399 1.974 10.902 2.322 11.754C2.67 12.594 3.186 13.356 3.87 14.04C4.554 14.724 5.328 15.252 6.192 15.624C7.092 16.008 8.028 16.2 9 16.2H13.5V18H9C7.752 18 6.6 17.772 5.544 17.316C4.488 16.872 3.51 16.2 2.61 15.3C1.71 14.4 1.05 13.44 0.63 12.42C0.21 11.4 0 10.266 0 9.01799C0 7.75799 0.222 6.59399 0.666 5.52599C1.098 4.49399 1.746 3.52199 2.61 2.60999C4.266 0.869987 6.396 -1.26362e-05 9 -1.26362e-05Z'/>
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}
