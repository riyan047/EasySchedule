import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Logo from "@/public/logo.png"
import Image from "next/image";
import { signIn } from "../lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";
export function AuthModel() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try for Free</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[360px]">
                <DialogHeader className="flex flex-row justify-center items-center gap-2">
                    <Image src={Logo} alt="" className="size-10" />
                    <DialogTitle className="text-3xl font-semibold ">
                        Easy<span className="text-primary">Schedule</span>
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col mt-5 gap-3">
                    <form action={async () => {
                        "use server"
                        await signIn("google");
                    }}
                        className="w-full">
                       <GoogleAuthButton/>
                    </form>
                    <form action={async()=>{
                        "use server"
                        await signIn("github")
                    }}>
                        <GitHubAuthButton/>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}