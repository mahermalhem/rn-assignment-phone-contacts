
export type IContactCard = 
{company: string,
  department: string,
  displayName: string,
  emailAddresses: string[],
  familyName: string,
  givenName: string,
  hasThumbnail: boolean,
  thumbnailPath:string | undefined,
  imAddresses: [],
  isStarred: true,
  jobTitle: string,
  middleName: string, 
  note: string,
  phoneNumbers: [
    {
        id: string,
        label: string,
        number: string
    }
],

    postalAddresses: [],
    prefix: string,
    rawContactId: string,
};