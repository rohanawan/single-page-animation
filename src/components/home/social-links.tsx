import styles from "../../styles/banner.module.css";

// Icons Import
import {
    LogoIcon,
    InstagramIcon,
    LinkedInIcon,
    WithoutWarningIcon,
} from "../../components/icons";

// Constants Import
import { SOCIAL_LINKS } from "../../constants";

const { logo, instagram, linkedin } = SOCIAL_LINKS;

export default function SocialLinks() {
    return (
        <div>
            {/* Left */}
            <div className={styles.withoutWarning}>
                <WithoutWarningIcon />
            </div>

            {/* Right */}
            <div className={styles.socialLinks}>
                <a href={logo} target="_blank" rel="noopener noreferrer">
                    <LogoIcon />
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
            </div>
        </div>
    );
}
