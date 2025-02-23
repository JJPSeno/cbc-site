export const useProfile = () => {
  const myProfile = useState<Profile>('profile', () => {
    return {
      id: "00000020f51bb4362eee2a4d",
      email: "jjp.s@example.com",
      display_name: "jjps"
    }
  })

  const profileList = useState<Profile[]>('profile-list', () => {
    return [
      {
        id: "00000020f51bb4362eee2a4d",
        email: "jjp.s@example.com",
        display_name: "jjps"
      },
      {
        id: "67a2e1a13e5a709de726392f",
        email: "dh.c@example.com"
      },
      {
        id: "67a2e1aa10b3c06d7bc03a85",
        email: "jk.y@example.com"
      },
    ]
  })

  return {
    myProfile,
    profileList
  }
}