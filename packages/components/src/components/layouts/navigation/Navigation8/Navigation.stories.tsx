import React from 'react';
import { action } from '@storybook/addon-actions';

import { Navigation8 } from '.';
import {
  Link,
  Asset,
  TypographyTypes,
  Typography,
} from 'components/primitives';
import { Button, ButtonTypes } from 'components/primitives';

export default {
  title: 'Composer/Layout/Navigation/Navigation8',
  component: Navigation8,
};

export const withContentSearchLogoCenter = () => (
  <Navigation8 style={{}}>
    {{
      logo: (
        <Link url="https://www.google.com">
          <Asset
            asset={{
              title: '',
              url:
                'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
              contentType: 'image',
            }}
          />
        </Link>
      ),
      content: [
        <Link url="#" key="0">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="1">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="2">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="3">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="4">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="5">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
      ],
      secondaryContent: [
        <Button
          type={ButtonTypes.Primary}
          onClick={action('button action click')}
          key="0"
        >
          <Typography tag="span" type={TypographyTypes.Button}>
            Sign up
          </Typography>
        </Button>,
        <Button
          type={ButtonTypes.Secondary}
          onClick={action('button action click')}
          key="1"
        >
          <Typography tag="span" type={TypographyTypes.Button}>
            Log in
          </Typography>
        </Button>,
      ],
    }}
  </Navigation8>
);

withContentSearchLogoCenter.story = {
  name: 'With content search and logo center',
};
