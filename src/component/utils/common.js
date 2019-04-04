export const updateObject = (sourceObject, updateValues) => {
  return {
    ...sourceObject,
    ...updateValues
  };
};
