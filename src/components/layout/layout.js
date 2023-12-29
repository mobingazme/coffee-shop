import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import Loading from "src/app/loading"




export const generatMetadata = async () => {
    //درخواست


    return {
        title: "",
        description: "",
        authros: {},
        other: { mytag: "test meta tag" }
    }
}



function Layout({ children, isLoading }) {


    return (
        <>

            <Header />
            {isLoading && <Loading />}
            <div >{children}</div>
            <Footer />

        </>

    )
}

export default Layout