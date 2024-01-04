import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Dancer } from "../../../models/Dancer";
import { PositionData } from "../../../models/PositionData";
import { PositionFrame } from "../../../models/PositionFrame";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PositionData)
export class PositionDataRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Dancer, {
    nullable: false
  })
  async dancer(@TypeGraphQL.Root() positionData: PositionData, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Dancer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).positionData.findUnique({
      where: {
        dancerId_frameId: {
          dancerId: positionData.dancerId,
          frameId: positionData.frameId,
        },
      },
    }).dancer({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PositionFrame, {
    nullable: false
  })
  async frame(@TypeGraphQL.Root() positionData: PositionData, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PositionFrame> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).positionData.findUnique({
      where: {
        dancerId_frameId: {
          dancerId: positionData.dancerId,
          frameId: positionData.frameId,
        },
      },
    }).frame({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
