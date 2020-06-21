import React from 'react';
import { Footer2 } from '.';
import { Link, Asset } from 'components/primitives';

export default {
  title: 'Composer/Layout/Footer/Footer2',
  component: Footer2,
};

export const basic = () => (
  <Footer2 copy="© 2020 Composer" style={{}}>
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
      secondaryContent: [
        <Link
          url="https://www.twitter.com"
          className="flex justify-center"
          key="0"
        >
          <Asset
            asset={{
              title: '',
              url:
                'https://images.ctfassets.net/o9153kt66j4s/30oPHVNxaL4dRKZhkUUfa6/dc91f4aa39a1b8d7acf5a7c5f46c204e/Twitter.svg',
              contentType: 'image',
            }}
          />
        </Link>,
        <Link
          url="https://www.facebook.com"
          className="flex justify-center"
          key="1"
        >
          <Asset
            asset={{
              title: '',
              url:
                'https://images.ctfassets.net/o9153kt66j4s/1kLv0p0bXeOCHyX36hH1Y1/d74901403dc4c7e39cdd3a6dc91d4a9e/Facebook.svg',
              contentType: 'image',
            }}
          />
        </Link>,
        <Link
          url="https://www.instagram.com"
          className="flex justify-center"
          key="2"
        >
          <Asset
            asset={{
              title: '',
              url:
                'https://images.ctfassets.net/o9153kt66j4s/6JKQec3bWkfYls3D2tqHE0/ee29c366ddc051664cd378b9371b82c8/Instagram.svg',
              contentType: 'image',
            }}
          />
        </Link>,
      ],
    }}
  </Footer2>
);

basic.story = {
  name: 'Basic',
};
