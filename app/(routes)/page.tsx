import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("83efc545-c3b1-4bb8-983f-54e6922fe735");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}  />
            </div>
        </Container>
    )
}

export default HomePage;