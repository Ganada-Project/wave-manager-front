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
    defaultMessage: '오로지 나만을 위한',
  },
  subTitle: {
    id: `${scope}.subTitle`,
    defaultMessage: '단 하나의 패션 커머스',
  },
});
