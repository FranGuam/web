import { PageProps } from "..";

const RepoPage: React.FC<PageProps> = ({ mode, user }) => {
  return (
    <div style={{color: mode === 'dark' ? 'white' : 'initial'}}>
      <h1>敬请期待！</h1>
    </div>
  );
};

export default RepoPage;
