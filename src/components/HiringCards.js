import styles from '../styles/WeAreHiring.module.css'
// Hiring Card
export default function HiringCards(props) {
    let { id, title, description, eligibility, color } = props;
    return (
        <div className={`flex flex-col pl-6 pt-6 w-80 lg:w-96 pr-6 font-[Inter] pb-10 br-6 rounded-xl sm:mr-4 lg:mr-16 ${styles.card1} mb-4 sm:ml-8 lg:mb-8`}>
                <div className={`h-7 rounded-lg ${styles[color]} mb-3 ${styles.widthchange}`}></div>
            <div className="text-3xl sm:text-2xl font-bold leading-9 sm:leading-tight pb-4">{title}</div>
            <div className="pb-5 font-light text-xl sm:text-lg leading-7 sm:leading-tight pr-4">{description}</div>
            <div className="text-xl sm:text-lg leading-10 sm:leading-tight font-light">Requirements: {eligibility}</div>
        </div>
    )
}