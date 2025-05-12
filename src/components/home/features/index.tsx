import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Flexible Querybuilder',
    img: require('@site/static/img/query.png').default,
    description: (
      <>
        Elemental comes with a simple and easy-to-understand Querybuilder which makes even complex queries easy to
        build.
      </>
    )
  },
  {
    title: 'Plugin Ecosystem',
    img: require('@site/static/img/plugins.jpg').default,
    description: (
      <>
        Elemental has a rich plugin ecosystem which allows you to extend the functionality of the Querybuilder. It also
        comes with a set of pre-built plugins.
      </>
    )
  },
  {
    title: 'Cross Connection Queries',
    img: require('@site/static/img/databases.jpg').default,
    description: (
      <>
        Elemental allows you to run queries across multiple connections. This is useful when you have to query multiple
        databases.
      </>
    )
  }
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
