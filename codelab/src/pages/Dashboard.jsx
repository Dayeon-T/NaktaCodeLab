import DashboardWelcome from '../components/DashboardWelcome';

export default function Dashboard() {
    return (
        <div className="dashboard-welcome">
            <DashboardWelcome
                name="윤다연"
                profileImg="/chick.png"
                courseCount={3}
                taskCount={2}
            />
        </div>
    );
}
