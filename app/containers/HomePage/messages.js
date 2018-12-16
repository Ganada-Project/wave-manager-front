/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'wm.containers.HomePage';

export default defineMessages({
  mainTitle: {
    id: `${scope}.mainTitle`,
    defaultMessage: '내 손 안에 모든 패션',
  },
  subTitle: {
    id: `${scope}.subTitle`,
    defaultMessage: '단 하나의 패션 커머스',
  },
});
