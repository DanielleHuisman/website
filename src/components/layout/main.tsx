import { SiBluesky, SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';
import { MailIcon } from 'lucide-react';

import { SiLinkedin } from '~/components/icons/linkedin';
import { Button } from '~/components/ui/button';
import profileUrl from '~assets/images/profile-2025.jpg';

export const Main = () => {
    return (
        <main className="flex grow flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-8">
                <img className="size-64 rounded-full" src={profileUrl} alt="Profile" />

                <div className="space-y-6">
                    <h1 className="text-center text-6xl font-medium text-white">Daniëlle Huisman</h1>
                    <h2 className="text-center text-4xl font-medium text-white">Full Stack Software Engineer</h2>
                </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 md:flex-row">
                <Button variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/huismandanielle/">
                        <SiLinkedin />
                        LinkedIn
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://github.com/DanielleHuisman">
                        <SiGithub />
                        GitHub
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://bsky.app/profile/daniellehuisman.nl">
                        <SiBluesky />
                        Bluesky
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://mastodon.social/@DanielleHuisman">
                        <SiMastodon />
                        Mastodon
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="mailto:danielle@huisman.me">
                        <MailIcon />
                        Email
                    </a>
                </Button>
            </div>
        </main>
    );
};
