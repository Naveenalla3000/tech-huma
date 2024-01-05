/**
 * @type {{ ADMIN: "ADMIN"; USER: "USER";HELPER: "HELPER"} as const}
 */
const UserRolesEnum = {
    ADMIN: "ADMIN",
    USER: "USER",
    HELPER: "HELPER",
};

const AvailableUserRoles = Object.values(UserRolesEnum);

module.exports = {
    UserRolesEnum,
    AvailableUserRoles,
  };