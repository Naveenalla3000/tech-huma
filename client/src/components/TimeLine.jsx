import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRegStar as StarIcon } from 'react-icons/fa';
import { FaHourglassStart } from 'react-icons/fa'
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiSolidSelectMultiple } from 'react-icons/bi';
import { GrAnnounce } from 'react-icons/gr';
import { TfiAnnouncement } from 'react-icons/tfi';
import { GiMaterialsScience } from 'react-icons/gi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Draggable from 'react-draggable';

const TimeLine = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [activeDrags, setActiveDrags] = React.useState(0);
    const [deltaPosition, setDeltaPosition] = React.useState({ x: 0, y: 0 });
    const [controlledPosition, setControlledPosition] = React.useState({ x: -400, y: 200 });

    const handleDrag = (e, ui) => {
        const { x, y } = deltaPosition;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };

    const onStart = () => {
        setActiveDrags(activeDrags + 1);
    };

    const onStop = () => {
        setActiveDrags(activeDrags - 1);
    };

    const onDrop = (e) => {
        setActiveDrags(activeDrags - 1);
        if (e.target.classList.contains('drop-target')) {
            alert('Dropped!');
            e.target.classList.remove('hovered');
        }
    };

    const onDropAreaMouseEnter = (e) => {
        if (activeDrags) {
            e.target.classList.add('hovered');
        }
    };

    const onDropAreaMouseLeave = (e) => {
        e.target.classList.remove('hovered');
    };

    const adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { x, y } = controlledPosition;
        setControlledPosition({ x: x - 10, y });
    };

    const adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { x, y } = controlledPosition;
        setControlledPosition({ x, y: y - 10 });
    };

    const onControlledDrag = (e, position) => {
        const { x, y } = position;
        setControlledPosition({ x, y });
    };

    const onControlledDragStop = (e, position) => {
        onControlledDrag(e, position);
        onStop();
    };

    React.useEffect(() => {
        if (inView) {
            // Start the animation when the drone is in view
            controls.start({ marginLeft: '0px', marginTop: '0px', opacity: 1, transition: { duration: 2 } });
        }
    }, [controls, inView]);
    return (
        <div className='w-full h-auto pt-24 relative'>
            <img src={'images/curves/upperCurve.webp'} alt='' className='transform -scale-y-100 absolute top-0' />
            <div className="px-16 pb-24">
                <h1 className='text-3xl font-semibold text-center py-6'>OUR TIMELINE</h1>
                <VerticalTimeline lineColor='#121212'>

                    {/* Statup */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#f34d5c', color: '#000' }}
                        contentArrowStyle={{ borderRight: '10px solid  #f34d5c' }}
                        date="23 DEC 2023"
                        iconStyle={{ background: '#f34d5c', color: '#fff' }}
                        icon={<FaHourglassStart />}
                    >
                        <div className="text-white">
                            <h3 className="vertical-timeline-element-title text-xl font-semibold">Launch of Tech Tropolis Hackton </h3>
                            <h4 className="vertical-timeline-element-subtitle">Lorem ipsum dolor</h4>
                            <p className='font-medium'>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    {/* Registations */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#ea7e2e', color: '#000' }}
                        contentArrowStyle={{ borderRight: '10px solid  #ea7e2e' }}
                        date="28 DEC 2023 TO 02 JAN 2024"
                        iconStyle={{ background: '#ea7e2e', color: '#fff' }}
                        icon={<HiOutlineLightBulb />}
                    >
                        <div className="text-white">
                            <h3 className="vertical-timeline-element-title text-xl font-semibold">Registration And Idea Submition</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    {/* Idea Evaluation  */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#14aeae', color: '#000' }}
                        contentArrowStyle={{ borderRight: '10px solid  #14aeae' }}
                        date="03 JAN 2024 TO 08 JAN 2024"
                        iconStyle={{ background: '#14aeae', color: '#fff' }}
                        icon={<BiSolidSelectMultiple />}
                    >
                        <div className="text-white">
                            <h3 className="vertical-timeline-element-title text-xl font-semibold">Idea Evalution</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    {/* Announcements of Finalists */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#0f5572', color: '#000' }}
                        contentArrowStyle={{ borderRight: '10px solid  #0f5572' }}
                        date="09 JAN 2024"
                        iconStyle={{ background: '#0f5572', color: '#fff' }}
                        icon={<GrAnnounce />}
                    >
                        <div className="text-white">
                            <h3 className="vertical-timeline-element-title">Announcement Of Finalists</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design Lorem ipsum dolor sit Lorem ipsum dolor sit.
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    {/* Announcement of Nodel Center */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#ea7e2e', color: '#000' }}
                        contentArrowStyle={{ borderRight: '10px solid  #ea7e2e' }}
                        date="10 JAN 2024 To 11 JAN 2024"
                        iconStyle={{ background: '#ea7e2e', color: '#fff' }}
                        icon={<TfiAnnouncement />}
                    >
                        <div className="text-white">
                            <h3 className="vertical-timeline-element-title">Announcement Of Nodal Center</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design Lorem ipsum dolor sit Lorem ipsum dolor sit.
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    {/* Grand final */}
                    <VerticalTimelineElement
                        contentStyle={{ background: '#f34d5c', color: '#000' }}
                        contentArrowStyle={{ borderRight: '10px solid  #f34d5c' }}
                        date="12 JAN 2024"
                        iconStyle={{ background: '#f34d5c', color: '#fff' }}
                        icon={<GiMaterialsScience />}
                    >
                        <div className="text-white">
                            <h3 className="vertical-timeline-element-title">Grand finale</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design Lorem ipsum dolor sit Lorem ipsum dolor sit.
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
            <div ref={ref} className='relative w-full]'>
                <motion.div
                    animate={controls}
                    initial={{ marginLeft: '600px', marginTop: '0px' }}
                    className='w-[300px] h-[200px] absolute bottom-28 left-32'
                >
                    <Draggable
                        onStart={onStart}
                        onStop={onStop}
                        onDrag={handleDrag}
                        onDrop={onDrop}
                        onDropAreaMouseEnter={onDropAreaMouseEnter}
                        onDropAreaMouseLeave={onDropAreaMouseLeave}
                        adjustXPos={adjustXPos}
                        adjustYPos={adjustYPos}
                        onControlledDrag={onControlledDrag}
                        onControlledDragStop={onControlledDragStop}
                    >
                        <div
                            className='w-full h-full drop-shadow-2xl !z-50'
                            style={{ backgroundImage: 'url("images/drone.gif")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                        ></div>
                    </Draggable>
                </motion.div>
            </div>
            <img src={'images/curves/upperCurve.webp'} alt='' className='transform absolute bottom-0' />
        </div>
    )
}

export default TimeLine