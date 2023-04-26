export default function Page() {
  return null
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/characters",
      permanent: false,
    },
  }
}
