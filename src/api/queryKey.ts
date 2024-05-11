const commonKey = {
  all: ['common/all'],
};

const userInfoKey = {
  all: [...commonKey.all, 'userInfo/all'],
  list: () => [...userInfoKey.all, 'list'],
  getById: (userId: string) => [...userInfoKey.list(), userId],
};

const eventEnrollmentInfoKey = {
  all: [...commonKey.all, 'eventEnrollmentInfo/all'],
  list: () => [...eventEnrollmentInfoKey.all, 'list'],
  getById: (eventEnrollmentId: string) => [...eventEnrollmentInfoKey.list(), eventEnrollmentId],
};

export { commonKey, userInfoKey, eventEnrollmentInfoKey };
