interface IEvents {
  getEvents: {
    result: {
      titleImage: {
        id: string;
        __typename: string;
      };
      id: string;
      name: string;
      address: {
        street: string;
        place: string;
        __typename: string;
      };
      __typename: string;
    }[];
    __typename: string;
  };
}
export default IEvents;
