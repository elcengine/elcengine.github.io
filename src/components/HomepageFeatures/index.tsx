import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Flexible Querybuilder',
    Svg: require('@site/static/img/query.svg').default,
    description: (
      <>
        Elemental comes with a simple and easy-to-understand Querybuilder which makes even complex queries easy to build.
      </>
    ),
  },
  {
    title: 'Plugin Ecosystem',
    Svg: require('@site/static/img/plugins.svg').default,
    description: (
      <>
        Elemental has a rich plugin ecosystem which allows you to extend the functionality of the Querybuilder. It also comes with a set of pre-built plugins.
      </>
    ),
  },
  {
    title: 'Cross Connection Queries',
    Svg: require('@site/static/img/databases.svg').default,
    description: (
      <>
        Elemental allows you to run queries across multiple connections. This is useful when you have to query multiple databases.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
