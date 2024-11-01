// Third party dependencies.
import React from 'react';
import { shallow } from 'enzyme';

// External dependencies.
import { BadgeVariant } from './Badge.types';
import { SAMPLE_BADGENETWORK_PROPS } from './variants/BadgeNetwork/BadgeNetwork.constants';
import { SAMPLE_BADGESTATUS_PROPS } from './variants/BadgeStatus/BadgeStatus.constants';
import { SAMPLE_BADGENOTIFICATIONS_PROPS } from './variants/BadgeNotifications/BadgeNotifications.constants';

// Internal dependencies.
import Badge from './Badge';
import {
  BADGE_BADGENETWORK_TEST_ID,
  BADGE_BADGESTATUS_TEST_ID,
  BADGE_BADGENOTIFICATIONS_TEST_ID,
} from './Badge.constants';

describe('Badge', () => {
  it('should render badge network given the badge network variant', () => {
    const wrapper = shallow(
      <Badge {...SAMPLE_BADGENETWORK_PROPS} variant={BadgeVariant.Network} />,
    );
    expect(wrapper).toMatchSnapshot();
    const contentElement = wrapper.findWhere(
      (node) => node.prop('testID') === BADGE_BADGENETWORK_TEST_ID,
    );
    expect(contentElement.exists()).toBe(true);
  });

  it('should render badge status given the badge status variant', () => {
    const wrapper = shallow(
      <Badge {...SAMPLE_BADGESTATUS_PROPS} variant={BadgeVariant.Status} />,
    );
    expect(wrapper).toMatchSnapshot();
    const contentElement = wrapper.findWhere(
      (node) => node.prop('testID') === BADGE_BADGESTATUS_TEST_ID,
    );
    expect(contentElement.exists()).toBe(true);
  });

  it('should render badge notifications given the badge notification variant', () => {
    const wrapper = shallow(
      <Badge
        {...SAMPLE_BADGENOTIFICATIONS_PROPS}
        variant={BadgeVariant.NotificationsKinds}
      />,
    );
    expect(wrapper).toMatchSnapshot();
    const contentElement = wrapper.findWhere(
      (node) => node.prop('testID') === BADGE_BADGENOTIFICATIONS_TEST_ID,
    );
    expect(contentElement.exists()).toBe(true);
  });
});
