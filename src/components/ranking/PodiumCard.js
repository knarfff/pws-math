import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const PodiumCard = ({ positionDescription, student, cardMarginTop }) => {
  if (!student) student = { name: "", level: "", subject: "", avatar: "" };

  const { name, level, subject, avatar, position } = student;
  return (
    <Fragment>
      <Card className={`podium-card`}>
        <CardActionArea>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="font-weight-bold text-capitalize lead card-name"
          >
            {name}
          </Typography>
          <Avatar
            alt="No Data"
            src={avatar}
            width="100%"
            className="avatar-img"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className="position-number"
            >
              {position}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className="position-description"
            >
              {positionDescription}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="h2"
              className="card-description"
            >
              {name} a obtenido la {positionDescription} en {subject} nivel{" "}
              {level}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <style jsx>{`
        .podium-card {
          max-width: 345px;
          width: 20%;
          padding-top: 7px;
          background: linear-gradient(
            0deg,
            rgba(34, 193, 195, 1) 0%,
            rgba(111, 66, 193, 1) 100%
          ); /*linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);*/
          border-radius: 15px;
          box-shadow: 4px 3px 5px 2px rgb(34, 193, 195); /*rgba(255, 105, 135, 0.3);*/
          margin-left: 20px;
        }
        .avatar-img {
          width: 30%;
          height: 81%;
          margin-right: auto !important;
          margin-left: auto !important;
          display: block !important;
        }

        .card-description {
          font-size: 12px;
          font-weight: bold;
          color: white;
        }

        .card-name {
          font-size: 20px;
          color: white;
        }

        .position-description {
          font-size: 20px;
          font-weight: bold;
          color: white;
        }
        .position-number {
          font-size: 32px;
          font-weight: bold;
          margin: 0px 0px 0px 0;
          color: white;
        }
        .card-1 {
          margin-top: 25px;
          display: table;
        }
        .card-2 {
          margin-top: 50px;
          display: table;
        }
        .card-3 {
          margin-top: 75px;
          display: table;
        }
      `}</style>
    </Fragment>
  );
};

export default PodiumCard;
