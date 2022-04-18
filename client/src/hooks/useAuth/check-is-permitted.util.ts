export function checkIsPermitted(userPermissions: number[], permittedPayload: number) {
  const matchedPermission = userPermissions.find((permission) => permission === permittedPayload);

  return matchedPermission !== undefined;
}
