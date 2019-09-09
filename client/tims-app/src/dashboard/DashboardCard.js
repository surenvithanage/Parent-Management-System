import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

export default function DashboardCard({ page, image, title }) {
  let styles = makeStyles({
    card: {
      width: '100%'
    },
    media: {
      height: 140,
      backgroundSize: '40%'
    }
  });

  let classes = styles();
  return (
    <Link
      to={page}
      style={{
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        textDecoration: 'none'
      }}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <h4 style={{ textAlign: 'center' }}> {title} </h4>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
