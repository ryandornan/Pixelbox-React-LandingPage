import ProcessDark from "../Components/ProcessDark";
import ProcessLight from "../Components/ProcessLight";

function Process() {
    const uniformImage = "/img/placeholder-square.jpg"; // Path to your uniform image

    return (
        <div className="process-section">
            <ProcessLight 
                number={"1"} 
                header={"INITIAL CONSULTATION"} 
                info={"We schedule a meeting to discuss your goals, challenges, and vision, laying the foundation for a tailored approach to propel your brand forward."} 
                image={uniformImage}
            />
            <ProcessDark 
                number={"2"} 
                header={"STRATEGY DEVELOPMENT"} 
                info={"We craft a custom plan tailored to your brand's needs and goals, setting clear objectives and outlining actionable tactics for success."} 
                image={uniformImage}
            />
            <ProcessLight 
                number={"3"} 
                header={"EXECUTION & IMPLEMENTATION"} 
                info={"We bring the strategy to life with precision. With your approval, our team handles every aspect, from creative design to technical execution."} 
                image={uniformImage}
            />
            <ProcessDark 
                number={"4"} 
                header={"CONTINUOUS OPTIMIZATION"} 
                info={"We don't just launch the campaign and call it a day. We continually monitor metrics, gathering insights and making adjustments to optimize results."} 
                image={uniformImage}
            />
            <ProcessLight 
                number={"5"} 
                header={"REPORTING & COMMUNICATION"} 
                info={"We maintain open communication, providing regular updates and detailed reports on campaign performance, allowing you to track progress."} 
                image={uniformImage}
            />
        </div>
    );
}

export default Process;
