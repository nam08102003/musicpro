import ButtonFollow from '../elements/ButtonFollow';

const Podcaster = ({ podcaster, key }) => {
    return (
        <div className="podcaster fl-center" key={key}>
            <div className="avatar-podcaster">
                <img src={require(`../../assets/images/podcasters/${podcaster.image}`)} alt="" />
            </div>
            <div className="info-podcaster">
                <h5>{podcaster.name}</h5>
                <span>{podcaster.follower} followers</span>
            </div>
            <div className="button-status-fl">
                <ButtonFollow className="bg-blue" />
            </div>
        </div>
    );
};

export default Podcaster;
