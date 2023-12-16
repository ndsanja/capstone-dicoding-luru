import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const { id } = useParams()
    return (
        <div>UserProfile {id}</div>
    )
}
